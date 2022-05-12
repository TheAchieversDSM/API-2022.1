import M from 'materialize-css'
export const modaljs = () => {
    console.log("preciso de ajuda.")
    document.addEventListener('DOMContentLoaded', function() {
        
        let elems = document.querySelectorAll('#modal1');
        var instance = M.Modal.init(elems);
        instance.open()
      }
    );
}