import axios from "axios";
import React, { useEffect, useState } from "react";

interface Post {
  id: string;
  text: string;
}

export const Slider = () => {
  const [slides, setSlides] = useState<Post[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setSlides(response.data);
      })
      .catch(error => {
        console.error(error);
      })
  }, []);

  slides.forEach(post => {
    console.log(post.text); // Можно использовать для вывода в консоль
  });

  return (
    <div>
      {slides.map(post => (
        <div key={post.id}>{post.text}</div>
      ))}
    </div>
  )
}
