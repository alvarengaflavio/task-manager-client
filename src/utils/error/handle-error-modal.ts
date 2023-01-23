import Swal from 'sweetalert2'

export function HandleError(err: Error, title?: string) {
  console.log(err)

  Swal.fire({
    title: title || 'Error',
    text: err.message,
    showConfirmButton: false,
    background: '#1e1e1e',
    color: '#afbec4',
    timer: 2000,
  })
}

// Swal.fire({
//   title: title || 'Error',
//   text: err.message,
//   icon: 'error',
//   confirmButtonText: 'Ok',
// })
