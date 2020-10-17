import React, { useState } from "react";
import {
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/core";
import { AddIcon } from "@chakra-ui/icons";
import { useStore, Image } from "./ImageStore";

export const AddImage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { addImage } = useStore();
  const [newImage, setNewImage] = useState<Image>({ url: "", description: "" });

  const handleInputChange = (newValue: string, inputField: string) => {
    const imageWithNewValue: Image = {
      url: inputField === "url" ? newValue : newImage.url,
      description:
        inputField === "description" ? newValue : newImage.description,
    };

    setNewImage(imageWithNewValue);
  };

  const onAddImage = () => {
    addImage && addImage(newImage);
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Add new image</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {addImage && (
                <AddImageForm handleInputChange={handleInputChange} />
              )}
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onAddImage}>
                Add new image
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
      <IconButton
        aria-label="Add image button"
        icon={<AddIcon />}
        position="absolute"
        zIndex="900"
        right="0"
        bottom="0"
        m="1rem"
        isRound={true}
        size="sm"
        onClick={onOpen}
      />
    </>
  );
};

interface AddImageFormProps {
  handleInputChange: (event: any, inputField: string) => void;
}

const AddImageForm = ({
  handleInputChange,
}: AddImageFormProps): JSX.Element => {
  return (
    <>
      <FormControl>
        <FormLabel>Image url</FormLabel>
        <Input
          placeholder="Url"
          onChange={(event: any) =>
            handleInputChange(event.target.value, "url")
          }
        />
      </FormControl>
      <FormControl>
        <FormLabel>Image description</FormLabel>
        <Input
          placeholder="Description"
          onChange={(event: any) =>
            handleInputChange(event.target.value, "description")
          }
        />
      </FormControl>
    </>
  );
};
