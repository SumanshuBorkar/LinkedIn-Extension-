import React from 'react';
import ReactDOM from 'react-dom';
import AIIcon from './AIIcon';
import Modal from './Modal';

let modalContainer: HTMLDivElement | null = null;

const appendAIIcon = () => {
  const messageBox = document.querySelector('.msg-form__contenteditable') as HTMLElement;

  if (messageBox && messageBox.parentNode) {
    const existingIcon = document.getElementById('ai-icon');
    if (!existingIcon) {
      const iconContainer = document.createElement('div');
      iconContainer.id = 'ai-icon';
      messageBox.parentNode.appendChild(iconContainer);
      renderAIIcon(iconContainer);
    }
  }
};

const renderAIIcon = (container: HTMLElement) => {
  ReactDOM.render(<AIIcon onIconClick={handleIconClick} />, container);
};

const handleIconClick = () => {
    console.log("Thank you for the opportunity! If you have any more questions or if there’s anything else I can help you with, feel free to ask.");
  if (!modalContainer) {
    modalContainer = document.createElement('div');
    modalContainer.id = 'modal-container';
    document.body.appendChild(modalContainer);
  }
  ReactDOM.render(<Modal onClose={closeModal} />, modalContainer);
};

const closeModal = () => {
  if (modalContainer) {
    ReactDOM.unmountComponentAtNode(modalContainer);
    modalContainer.remove();
    modalContainer = null;
  }
};

// Observe DOM changes to append the icon when the message box is present
const observer = new MutationObserver(() => {
  appendAIIcon();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
