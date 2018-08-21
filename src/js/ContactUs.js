import ReactDOM from 'react-dom'


function ContactUs(props) {
  return ReactDOM.createPortal(
    props.children,
    document.getElementById('portalRoot')
  )
}


export default ContactUs