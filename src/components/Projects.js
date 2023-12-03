import React, { useState } from "react";
import Modal from 'react-modal';
import { projects } from "../data"; 
import { FaImages } from 'react-icons/fa';

Modal.setAppElement('#root');

export default function Projects() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImages, setSelectedImages] = useState(projects.reduce((acc, project, index) => {
    acc[index] = project.images[0]; // Inicializa cada projeto com sua primeira imagem
    return acc;
  }, {}));

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const selectImage = (projectIndex, image) => {
    setSelectedImages({
      ...selectedImages,
      [projectIndex]: image // Atualiza apenas a imagem do projeto selecionado
    });
  };

  const benefitsStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Fundo sólido com leve transparência
    color: "#333", // Cor do texto escura para alto contraste
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)", // Sombra no texto para destacá-lo do fundo
    fontSize: "1rem", // Tamanho do texto
    padding: "10px", // Espaçamento interno para separar o texto do fundo
    borderRadius: "5px", // Bordas arredondadas para estética
    listStylePosition: 'inside' // Move os marcadores para dentro
  };
  

  const extraflonButtonStyle = "inline-flex items-center text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2";

  return (
    <section id="projects" className="w-full">
    <div>
      {/* Título da Seção */}
      <h2 className="text-7xl font-bold text-center my-10 bg-green-600 text-white">Serviços & Soluções</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10 md:px-20">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Imagem Principal */}
            <img className="w-full h-48 object-cover" src={selectedImages[index]} alt={project.title} />

            {/* Miniaturas */}
            <div className="flex justify-center p-2">
              {project.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image}
                  alt={`${project.title} ${imgIndex}`}
                  className="w-16 h-16 object-cover rounded-full cursor-pointer mx-1"
                  onClick={() => selectImage(index, image)}
                />
              ))}
            </div>

          {/* Conteúdo do Projeto */}
          <div className="p-4">
            <h5 className="text-lg font-medium text-gray-800 mb-2">{project.title}</h5>
            <p className="text-gray-500 text-sm">{project.description}</p>
            <button
              onClick={() => openModal(project)}
              className="block mx-auto text-center text-2xl mt-4 text-blue-600 hover:text-neutral-600 font-semibold"
              style={{ fontSize: '1.3em' }}>
              Veja os Benefícios »
            </button>
          </div>
        </div>
      ))}

      {/* Modal com Benefícios */}
      <Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  style={{
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      width: '50%',
      maxWidth: '640px',
      maxHeight: '80vh',
      overflow: 'auto',
      background: `url(${selectedProject ? selectedProject.images[0] : ''}) no-repeat center center`,
      backgroundSize: 'cover',
      borderRadius: '20px',
      padding: '20px',
      boxSizing: 'border-box'
    }
  }}
>
  <div className="relative p-8 bg-white bg-opacity-75 w-full max-w-md m-auto flex-col flex rounded-lg">
          <div className="flex justify-between items-center pb-3">
            <h2 className="text-2xl font-bold">{selectedProject && selectedProject.title}</h2>
            <button onClick={closeModal} className="modal-close-button cursor-pointer z-50">
              <span className="text-3xl text-red-500">&times;</span>
            </button>
          </div>
          <ul className="benefits-list list-disc pl-5 space-y-2" style={benefitsStyle}>
            {selectedProject && selectedProject.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center mt-4"> {/* Esta div centraliza o botão e adiciona margem superior */}
          <a href="/experiences" className={extraflonButtonStyle}>
            <FaImages className="mr-2"/>
            ACESSE NOSSO EXPERIENCE!
          </a>
        </div>
      </Modal>
      </div>
    </div>
    </section>
  );
}
