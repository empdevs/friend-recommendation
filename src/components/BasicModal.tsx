import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface IBasicModal {
    isOpen: boolean,
    onApprove: React.MouseEventHandler<HTMLButtonElement>,
    onCancel: () => void,
    onCancelText: string,
    onApproveText: string,
    // isShowApproveBtn: boolean,
    // isShowCancelBtn: boolean,
    headerText: string,
    bodyText: string
}

const BasicModal: React.FunctionComponent<IBasicModal> = (props: IBasicModal) => {
    return (
        <Modal show={props.isOpen} onHide={props.onCancel}>
            <Modal.Header closeButton>
                <Modal.Title>{props.headerText}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.bodyText}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onCancel}>
                    {props.onCancelText}
                </Button>
                <Button variant="primary" onClick={props.onApprove}>
                    {props.onApproveText}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default BasicModal;