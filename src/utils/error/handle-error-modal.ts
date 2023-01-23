import Swal from 'sweetalert2'

export function HandleError(err: Error, title?: string) {
  console.log(err)
  Swal.fire({
    title: title || 'Error',
    text: err.message,
    icon: 'error',
    confirmButtonText: 'Ok',
  })
}
