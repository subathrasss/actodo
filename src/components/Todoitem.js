function Todoitem(props) {
    const list = props.list
    const setlist = props.setlist

    function handledel(delid) {
        var temparr = list.filter(function (i) {
            if (delid === i.id) {
                return false
            }
            else {
                return true
            }
        })
        setlist(temparr)
    }
    return (
        <div className="flex justify-between">
            <p>{props.index + 1}.{props.act}</p>
            <button className="text-red-400" onClick={() => handledel(props.id)}>delete</button>
        </div>)
}
export default Todoitem