import React from 'react'
import ReactModal from 'react-modal'
import Draggable from 'react-draggable'
import DragIcon from 'react-icons/lib/md/drag-handle'
import cn from 'classnames'

import Close from './close'

const Modal = ({
  children,
  header,
  className,
  overlayClassName,
  isOpen,
  withClose,
  sticky,
  footer,
  draggable,
  onClose,
}) => {
  if (!isOpen) {
    return null
  }

  const cl = cn('bisu--react-modal', 'modal-dialog', className)
  const oc = cn('bisu--react-modal-overlay', overlayClassName)

  return (
    <ReactModal
      className={cl}
      overlayClassName={oc}
      contentLabel="modal"
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={!sticky}
      isOpen
    >
      <Draggable handle=".draggable">
        <div className="modal-content">
          {header &&
            <div className="modal-header">
              {header}
            </div>}
          <div className="modal-body">
            {children}
          </div>
          {footer}
          {withClose && <Close onClose={onClose} />}
          {draggable &&
            <button type="button" title="drag" className="close draggable">
              <DragIcon />
            </button>}
        </div>
      </Draggable>
    </ReactModal>
  )
}

export default Modal
