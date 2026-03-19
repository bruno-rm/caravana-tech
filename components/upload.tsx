"use client";

import { UploadButton } from "@/utils/uploadthing";
import { useState } from "react";
import Image from "next/image";
import { DivideIcon } from "@heroicons/react/24/outline";

export default function Upload() {
const [imageUrl, setImageUrl] = useState<string>("")
const [imageName, setImageName] =useState<string>("")

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          console.log("presignedUrl: ", res[0].ufsUrl);

          setImageUrl(res[0].ufsUrl);
          setImageName(res[0].name)

          alert("Upload Completed"); 
 
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />

      {imageUrl.length ? <div>
        <Image src={imageUrl} alt={imageName} width={500} height={500}/>

      </div> : null }
    </main>
  );
}


