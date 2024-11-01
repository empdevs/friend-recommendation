// useNotification.ts
import { notification } from 'antd';

export const useNotification = () => {
    const [api, contextHolder] = notification.useNotification();

    const openNotification = ({
        message,
        description,
        showProgress,
        pauseOnHover,
        notificationType
    }: {
        message?: string;
        description?: string;
        showProgress?: boolean;
        pauseOnHover?: boolean;
        notificationType?: "success" | "info" | "warning" | "error"
    }) => {
        api[notificationType ?? "open"]({
            message,
            description,
            showProgress,
            pauseOnHover,
        });
    };

    return { openNotification, contextHolder };
};
