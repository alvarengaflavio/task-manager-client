import Swal from 'sweetalert2'

export function HandleError(err: Error) {
  Swal.fire({
    title: 'Error!',
    text: err.message,
    icon: 'error',
    confirmButtonText: 'Ok',
  })
}
