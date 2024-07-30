/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { AiOutlineCheckCircle, AiOutlineCloudUpload } from 'react-icons/ai';
import { MdClear } from 'react-icons/md';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import axios from 'axios';

interface DragNdropProps {
  onFilesSelected: (files: File[]) => void;
  width: string;
  height: string;
  onMediaUploaded: (urls: string[]) => void;
}

const DragNdropImage: React.FC<DragNdropProps> = ({
  onFilesSelected,
  width,
  height,
  onMediaUploaded,
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [previews, setPreviews] = useState<{ type: string; url: string }[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadedMedia, setUploadedMedia] = useState<string[]>([]);
  const [url, setUrl] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      const newFiles = Array.from(selectedFiles);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
      generatePreviews(newFiles);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles.length > 0) {
      const newFiles = Array.from(droppedFiles);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
      generatePreviews(newFiles);
    }
  };

  const generatePreviews = (newFiles: File[]) => {
    newFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviews((prevPreviews) => [
          ...prevPreviews,
          { type: file.type, url: reader.result as string },
        ]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDragEnter = () => {
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setPreviews((prevPreviews) => prevPreviews.filter((_, i) => i !== index));
  };

  useEffect(() => {
    onFilesSelected(files);
  }, [files, onFilesSelected]);

  const uploadMedia = async () => {
    setUploading(true);
    const uploadedUrls: string[] = [];

    for (const file of files) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await axios.post('/api/uploader/image', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        const { url } = response.data;
        uploadedUrls.push(url);
      } catch (error) {
        console.error('Failed to upload media:', error);
      }
    }
    onMediaUploaded(uploadedUrls);
    setUploadedMedia((prevUrls) => [...prevUrls, ...uploadedUrls]);
    setUploading(false);
    setFiles([]);
    setPreviews([]);
  };

  const handleAddUrl = () => {
    if (url) {
      setUploadedMedia((prevUrls) => [...prevUrls, url]);
      setUrl('');
    }
  };

  return (
    <>
      <div className="font-semibold text-lg p-4">Add Image / GIF / Video</div>
      <section
        className={`flex justify-center items-center border-2 rounded-lg p-4 ${
          isDragging ? 'border-blue-500' : 'border-gray-300 border-dashed'
        }`}
        style={{ width, height }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
      >
        <div className="w-56 h-52 flex flex-col items-center cursor-pointer justify-center">
          {files.length === 0 && (
            <>
              <div className="flex flex-col items-center text-center">
                <AiOutlineCloudUpload className="text-4xl text-gray-500" />
                <div>
                  <p className="text-gray-400 text-md cursor-pointer">
                    Drag and Drop files here
                  </p>
                  <p className="text-gray-400 text-md">or</p>
                </div>
              </div>
              <div className="flex justify-center">
                <Input
                  type="file"
                  id="browse"
                  onChange={handleFileChange}
                  accept="image/*,video/*"
                  multiple
                  className="hidden"
                />
                <label
                  htmlFor="browse"
                  className="mt-4 text-blue-400 inline-block border border-blue-400 py-1 px-4 rounded cursor-pointer"
                >
                  Browse files
                </label>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Add Media URL</h3>
                <div className="flex items-center">
                  <Input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter URL"
                    className="flex-1"
                  />
                  <Button onClick={handleAddUrl} className="ml-2">
                    Add URL
                  </Button>
                </div>
              </div>
            </>
          )}

          {files.length > 0 && (
            <div className="mt-4 w-full">
              {previews.map((preview, index) => (
                <div key={index} className="relative mb-2">
                  {preview.type.startsWith('image/') ? (
                    <img
                      src={preview.url}
                      alt={`Preview ${index}`}
                      className="w-full h-auto rounded"
                    />
                  ) : (
                    <video
                      src={preview.url}
                      className="w-full h-auto rounded"
                      controls
                    />
                  )}
                  <Button
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                    onClick={() => handleRemoveFile(index)}
                  >
                    <MdClear />
                  </Button>
                </div>
              ))}
            </div>
          )}

          {files.length > 0 && (
            <div className="mt-2 flex items-center font-normal text-sm text-green-600">
              <AiOutlineCheckCircle className="mr-1" />
              <p>{files.length} file(s) selected</p>
            </div>
          )}
          {files.length > 0 && (
            <div className="mt-4">
              <Button onClick={uploadMedia} disabled={uploading}>
                {uploading ? 'Uploading...' : 'Upload Media'}
              </Button>
            </div>
          )}
        </div>
      </section>
      {uploadedMedia.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Uploaded Media:</h3>
          <div className="flex flex-wrap mt-2">
            {uploadedMedia.map((url, index) => (
              <div key={index} className="m-2">
                {url.match(/\.(jpeg|jpg|gif|png)$/) != null ? (
                  <img
                    src={url}
                    alt={`Uploaded ${index}`}
                    className="w-32 h-32 object-cover rounded"
                  />
                ) : (
                  <video
                    src={url}
                    controls
                    className="w-32 h-32 object-cover rounded"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default DragNdropImage;
