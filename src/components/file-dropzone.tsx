"use client";
import { Upload } from "lucide-react";
import { useCallback } from "react";
import Dropzone from "react-dropzone";

export function FileDropzone() {
	return (
		// <div className="w-full aspect-video rounded-lg bg-card border flex flex-col items-center justify-center gap-2">
		// 	<Upload className="text-primary size-8" />
		// 	<p className="text-sm text-muted-foreground">Drop your video here</p>
		// 	<p className="text-sm text-muted-foreground">or click to select</p>
		// </div>
		<Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
			{({ getRootProps, getInputProps }) => (
				<section className="w-full aspect-video rounded-lg bg-card border ">
					<div
						{...getRootProps()}
						className="w-full h-full flex flex-col items-center justify-center gap-2"
					>
						<input {...getInputProps()} />
						<p className="text-sm text-muted-foreground">
							Drop your video here
						</p>
						<p className="text-sm text-muted-foreground">or click to select</p>
					</div>
				</section>
			)}
		</Dropzone>
	);
}
