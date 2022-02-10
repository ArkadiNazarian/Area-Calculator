import { Container } from "./Container/Container";
import { View } from "./View/View";

export function App() {
    let get_props = Container();
    return <View
        {...get_props}
    />
}