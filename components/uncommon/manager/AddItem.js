// Import React and Next.js components
import React, { useState } from "react";
import Link from "next/link";

// Import styled components
import styled from "styled-components";
import { SelectFileLabel } from "@/components/common/Label";

// Define a custom component for the form
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

// Define a custom component for the input fields
const Input = styled.input`
  width: 300px;
  height: 40px;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
`;


// Define a custom component for the image upload
const ImageUpload = styled.div`
  width: 300px;
  height: 200px;
  border: 2px dashed #2d884d;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  &.dragging {
    border: 2px dashed #4091d7;
  }
`;

const StyledImage = styled.img`
    max-width: 100%;
    max-height: 100%;
`

// Define a custom component for the button
const Button = styled.button`
  width: 200px;
  height: 40px;
  background: #2a2c39;
  color: #fff;
  border: none;
  margin: 10px;
`;

// Define a custom component for the slide container
const Slide = styled.div`
  width: 100%;
  height: 100%;
`;

// Define a custom component for the slide content
const SlideContent = styled.div`
  max-width: 800px;
  margin: auto;
`;

// Define a custom component for the slide indicator
const SlideIndicator = styled.div`
  text-align: center;
`;

// Define a custom component for the slide dot
const Dot = styled.span`
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: ${props => props.active ? "white" : "blue"};
  border-radius: 50%;
`;

// Define a React component for the product form
function ProductForm() {

    // Use state hooks to store the form data and the current slide index
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null);
    const [slideIndex, setSlideIndex] = useState(0);
    const [dragging, setDragging] = useState(false)

    // Define a function to handle the drag over event
    const handleDragOver = (event) => {
        event.preventDefault();
        setDragging(true);
        event.dataTransfer.dropEffect = "copy";
    };
    

    const handleDragLeave = (event) => {
        event.preventDefault();
        setDragging(false);
    };

    // Define a function to handle the drop event
    const handleDrop = (event) => {
        setDragging(false);
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file && file.type.startsWith("image/")) {
            setImage(file);
        }
    };

    // Define a function to handle the input change events
    const handleChange = (event) => {
        const { name, value, files } = event.target;

        switch (name) {
            case "name":
                setName(value);
                break;

            case "price":
                setPrice(value);
                break;

            case "image":
                setImage(files[0]);
                break;

            default:
                break;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log({ name, price, image });
    };

    const showSlide = (n) => {
        if (n < 0) {
            n = slideIndex - 1; 
        } else if (n > slideIndex + 1) {
            n = slideIndex + 1; 
        } else if (n > slides.length - 1) {
            n = slides.length - 1;
        }

        setSlideIndex(n);
    };

    const slides = [
        {
            content: (
                <Form onSubmit={handleSubmit}>
                    <Input type="text" name="name" value={name} onChange={handleChange} placeholder="Enter product name" required />
                    <Button type="button" onClick={() => showSlide(slideIndex + 1)}>Next</Button>
                </Form>
            ),
            valid: () => name.trim() !== ""
        },
        {
            content: (
                <Form onSubmit={handleSubmit}>
                    <Input type="number" name="price" value={price} onChange={handleChange} placeholder="Enter product price" required />
                    <Button type="button" onClick={() => showSlide(slideIndex - 1)}>Previous</Button>
                    <Button type="button" onClick={() => showSlide(slideIndex + 1)}>Next</Button>
                </Form>
            ),
            valid: () => price > 0 && price < 1000000
        },
        {

            content: (
                <Form onSubmit={handleSubmit}>
                    <ImageUpload className={dragging ? 'dragging' : ''} onDragOver={handleDragOver} onDrop={handleDrop} onDragLeave={handleDragLeave}>
                        {image ? (
                                <StyledImage src={URL.createObjectURL(image)} alt="Product image" />
                        ) : (
                            <SelectFileLabel htmlFor="image">Select or drag an image</SelectFileLabel>
                        )}
                        <Input type="file" id="image" name="image" accept="image/*" onChange={handleChange} hidden />
                    </ImageUpload>
                    <Button type="button" onClick={() => showSlide(slideIndex - 1)}>Previous</Button>
                    <Button type="submit">Submit</Button>
                </Form>
            ),
            valid: () => image !== null && image.type.startsWith("image/")
        }
    ];

    return (
        <Slide>
            <SlideContent>
                {slides[slideIndex].content}
                <SlideIndicator>
                    {slides.map((slide, index) => (
                        <Dot key={index} active={index === slideIndex} />
                    ))}
                </SlideIndicator>
            </SlideContent>
        </Slide>
    );
}

export default ProductForm;
