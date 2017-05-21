import React, {Component} from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.modalClick = this.modalClick.bind(this);
  }

  closeModal() {
    var component = this;
    try {
      component.props.onModalClose();
    } catch(e) {
    }
  }

  modalClick(event) {
    if(event.target.className === "modal") {
      this.closeModal();
    }
  }

  render() {
    return (
      <div className="modal" onClick={this.modalClick}>
        <div className="modal-content complete-badge-modal">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Modal;
