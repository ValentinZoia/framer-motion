import React, { useState } from 'react'
import { JackPotSection } from './JackPotSection'
import { faker } from "@faker-js/faker";

const JackPotSectionPage = () => {
  const [images, setImages] = useState<string[]>();

  React.useEffect(() => {
    const images = Array.from({ length: 8 }, () => faker.image.url());
    setImages(images);
  }, []);

  
    return (
    <div>
        <JackPotSection images={images || []} />
    </div>
  )
}

export default JackPotSectionPage