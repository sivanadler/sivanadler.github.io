import '../statics/css/common.scss'

function WhitePane(props){
    const { content } = props

    return(
        <div id="whitePane">
            {content}
        </div>
    )

}

export default WhitePane