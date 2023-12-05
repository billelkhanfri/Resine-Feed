import { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null); // Utilisez null comme valeur initiale pour le fichier

  const handleFileChange = (e) => {
    // Mettez à jour l'état avec le fichier sélectionné
    setImage(e.target.files[0]);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("message", message);
    formData.append("image", image);

    fetch("http://localhost:8000/posts", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
          type="file"
          id="image"
          name="image"
          onChange={handleFileChange}
          required
        />
        <br />

        <button type="button" onClick={handleSubmit}>
          Soumettre
        </button>
      </form>
    </div>
  );
};

export default Form;
