import { Wrap } from "./styled";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

function Loading() {
	return (
		<Wrap>
			<Button variant="primary" disabled>
				<Spinner
					as="span"
					animation="grow"
					size="sm"
					role="status"
					aria-hidden="true"
				/>
				Loading...
			</Button>
		</Wrap>
	);
}

export default Loading;
