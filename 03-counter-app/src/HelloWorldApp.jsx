import PropTypes from 'prop-types'

export const HelloWorldApp = ({title,subtitle,}) => {

  // console.log(props)

  return (
    //fragment -> agrupador de elementos html, no crea div adicional
    <> 
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        
    </>
  )
}

HelloWorldApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number.isRequired
}

//los defaultProps entran antes que los propTypes
HelloWorldApp.defaultProps = {
  title: 'No hay titulo'
}