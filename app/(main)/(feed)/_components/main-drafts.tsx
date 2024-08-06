import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DraftTab from '../draft/drafts'
import PostedTab from '../draft/posted'


const MainDrafts = () => {
  return (
    <div>
      <Tabs defaultValue="drafts" className="w-full">
  <TabsList>
    <div className='flex'>
    <TabsTrigger value="drafts" className='text-zinc-900 text-md '>Drafts</TabsTrigger>
    <TabsTrigger value="posted" className="text-zinc-900 text-md">Posted</TabsTrigger>
    </div>
  </TabsList>
  <TabsContent value="drafts"><DraftTab/></TabsContent>
  <TabsContent value="posted"><PostedTab/></TabsContent>
</Tabs>
    </div>
  )
}

export default MainDrafts