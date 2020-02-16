// Loader component
import React from 'react';


const LoaderComponent = () => {
	return(
		<div className="d-flex justify-content-center align-content-center p-2">
			<div className="spinner-grow text-dark">
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	)
};

export default LoaderComponent;
