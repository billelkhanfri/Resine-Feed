/* eslint-disable react/prop-types */
import { useState } from "react";

const Form = ({ addNewPost }) => {
  const [fileInputKey, setFileInputKey] = useState(Date.now());

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null); // Utilisez null comme valeur initiale pour le fichier

  const handleFileChange = (e) => {
    // Mettez à jour l'état avec le fichier sélectionné
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("message", message);
    formData.append("image", image);

    try {
      const response = await fetch("http://localhost:8000/posts", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Error creating post: ${errorMessage}`);
      }

      const newPost = await response.json();
      console.log("Success:", newPost);

      // Réinitialiser les états après la soumission réussie
      setTitle("");
      setMessage("");
      setImage(null);

      // Réinitialiser la clé de l'élément <input type="file" />
      setFileInputKey(Date.now());
      addNewPost(newPost); // Update the posts in the parent component

      // Mettez à jour les posts dans le composant parent
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="title">Titre :</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />

        <label htmlFor="message">Message :</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <br />

        <label htmlFor="image">Sélectionner une image :</label>
        <input
          key={fileInputKey}
          type="file"
          id="image"
          name="image"
          onChange={handleFileChange}
          required
        />
        <br />

        <button type="submit" onClick={handleSubmit}>
          Soumettre
        </button>
      </form>
    </div>
  );
};

export default Form;
