import React, { useState, SyntheticEvent } from 'react'
import style from '@/styles/Table.module.css'
import {
  Box,
  Text,
  Flex,
  Button,
  Input,
  createStandaloneToast,
} from "@chakra-ui/react";
import {
  FileController,
  FileService,
  FileValidator as validator,
} from "../../modules";

type Props = {
  
  onSubmit : (e: React.FormEvent<HTMLFormElement> ) => void 
  
}


const LyUpload: React.FC<Props> = ({onSubmit }: Props) => {
  
  //const [isFileTypesModalOpen, setIsFilesTypeModalOpen] = useState<boolean>(false)
  const [uploadFormError, setUploadFormError] = useState<string>("");

  const handleFileUpload = async (element: HTMLInputElement) => {
    const file = element.files;

    if (!file) {
      return;
    }

    const validFileSize = await validator.validateFileSize(file[0].size);
    const validFileType = await validator.validateFileType(
      FileService.getFileExtension(file[0].name)
    );

    if (!validFileSize.isValid) {
      setUploadFormError(validFileSize.errorMessage);
      return;
    }

    if (!validFileType.isValid) {
      setUploadFormError(validFileType.errorMessage);
      return;
    }

    if (uploadFormError && validFileSize.isValid) {
      setUploadFormError("");
    }

    const fileController = new FileController(file[0]);
    const fileUploadResponse = await fileController.uploadFile();

    console.log(" ############## ");
    console.log(" fileUploadResponse : " + fileUploadResponse);
    console.log(" ############## ");

    element.value = "";
    /** 샤크라 의존 컴포넌트
      const toast = createStandaloneToast()
      toast({
          title: fileUploadResponse.success ? 'File Uploaded' : 'Upload Failed',
          description: fileUploadResponse.message,
          status: fileUploadResponse.success ? 'success' : 'error',
          duration: 3000,
          isClosable: true
      })  */
  };
 
  return (
    <div>
    <form onSubmit={onSubmit}>
      <Box width="50%" m="100px auto" padding="2" shadow="base">
        <Flex direction="column" alignItems="center" mb="5">
          <div className="col-md-3 text-center m-auto w-75 p-3">
            <h4 className={style.h4}>
              {" "}
              <br />
              작사하고 싶은 악보를 업로드하세요
            </h4>
          </div>

          {uploadFormError && (
            <Text mt="5" color="red">
              {uploadFormError}
            </Text>
          )}
          <Box mt="10" ml="24">
            <Input
              type="file"
              variant="unstyled"
              onChange={(e: SyntheticEvent) =>
                handleFileUpload(e.currentTarget as HTMLInputElement)
              }
            />
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="inputGroupFileAddon04"
            >
              <h5>악보 등록</h5>
            </button>
          </Box>
        </Flex>
      </Box>
    </form>
  </div>
  )
}
export default LyUpload