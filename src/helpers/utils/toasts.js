import {Bounce, toast} from 'react-toastify';

export const showWarning = message =>
    toast.warn(message, {
        toastId: 'warning',
        position: 'top-right',
        closeOnClick: true,
        transition: Bounce,
        autoClose: 1500,
});

export const showSuccess = message =>
    toast.success(message, {
        toastId: 'success',
        position: "top-right",
        closeOnClick: true,
        transition: Bounce,
        autoClose: 1500,
});