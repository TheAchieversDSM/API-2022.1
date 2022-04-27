
export const modaljs = () =>{
    document.addEventListener('DOMContentLoaded', function() {
        let elems = document.querySelectorAll('#modal1');
        var instance = M.Modal.init(elems);
        instance.open()
      });
}