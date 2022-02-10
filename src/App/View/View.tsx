import { IProps } from "../../Model/Model";

export function View(props: IProps) {
    return (
        <div className='Content'>
            <form onSubmit={props.action_submit}>
                <div>
                    <input
                        name="width"
                        type="text"
                        value={props.form_data.width}
                        onChange={props.handlechange}
                    />{
                        props.form_errors.width
                    }
                </div>
                <div>
                    <input
                        name="height"
                        type="text"
                        value={props.form_data.height}
                        onChange={props.handlechange}
                    />{
                        props.form_errors.height
                    }
                </div>
                <button type="submit">Submit</button>
            </form>
            <h2>Area is:{props.area}</h2>
        </div>
    )
}