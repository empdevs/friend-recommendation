import React from 'react';
import { Modal } from 'antd';


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
        <Modal
            title={props.headerText}
            open={props.isOpen}
            onOk={props.onApprove}
            onCancel={props.onCancel}
            okText={props.onApproveText}
            cancelText={props.onCancelText}
        >
            <p>{props.bodyText}</p>
        </Modal>
    );
};

export default BasicModal;