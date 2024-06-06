/* eslint-disable react/prop-types */
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import img from "../assets/file.png";
const DropZone = ({ className }) => {
  const [file, setFile] = useState(null);
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (rejectedFiles?.length > 0) {
      alert("Wront format Selected! please select supported format");
      return;
    }
    if (acceptedFiles?.length > 0) {
      setFile(acceptedFiles[0]);
      console.log(acceptedFiles[0]);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "application/vnd.ms-powerpoint": [],
      "application/vnd.openxmlformats-officedocument.presentationml.presentation":
        [],
    },
    maxSize: 1024 * 10 * 1000,
    onDrop,
  });
  function formatKbToMb(value) {
    if (value === null || value === undefined) return null;
    if (value === 0) return "0.0 Mb";

    const mb = value / (1024 * 1000);
    return `${mb.toFixed(1)} Mb`;
  }

  return (
    <div
      {...getRootProps({
        className: className,
      })}
    >
      <input {...getInputProps()} />

      <img src={img} alt="" height={64} width={64} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>
          Drag & drop some files here, or{" "}
          <span className="underline font-[600]">Browse</span>
        </p>
      )}
      <div className="h-auto flex flex-col">
        { file ? (
          <h4 className="font-[600] ">
            File name : {file.name}
            <br />
            File size : {formatKbToMb(file.size)}
          </h4>
        ) : (
          ""
        )}
        <h4 className="font-[600] mt-4">Supported type : pptx, ppt.</h4>
        <h4 className="font-[600]">Max Size : 10 Mb</h4>
      </div>
    </div>
  );
};

export default DropZone;
