"use client";

import {
  Block,
  BlockNoteEditor,
  PartialBlock
} from "@blocknote/core";

import {
  useCreateBlockNote
} from "@blocknote/react";

import { BlockNoteView } from "@blocknote/mantine";

import "@blocknote/mantine/style.css";
import "@blocknote/core/fonts/inter.css";

import { useEdgeStore } from "@/lib/edgestore";

import { useTheme } from "next-themes";
import { useState } from "react";

interface EditorProps {
  onChange: (content: string) => void;
  initialContent?: string;
  editable?: boolean;
};

const Editor: React.FC<EditorProps> = ({
  onChange,
  initialContent,
  editable
}: EditorProps) => {

  const [blocks, setBlocks] = useState<Block[]>([]);

  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({
      file
    });

    return response.url;
  }

  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: 
      initialContent 
      ? (JSON.parse(initialContent) as PartialBlock[]) 
      : undefined,
    uploadFile: handleUpload
  });



  return(
    <div>
      <BlockNoteView
        editor={editor}
        editable={editable}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
        onChange={() => {
          onChange(JSON.stringify(editor.document, null, 2));
        }}
      />
    </div>
  )
}

export default Editor;