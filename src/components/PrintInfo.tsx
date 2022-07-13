const PrintInfo = () => {
	return (
		<div
			className="position-absolute top-0 end-0 m-2 card d-none d-lg-block d-print-none"
			style={{ maxWidth: '25vw' }}
		>
			<div className="card-body">
				<p className="card-text">How to print:</p>

				<ol>
					<li>
						From the browser, select the <em>Print</em> option, or press{' '}
						<kbd>Ctrl + P</kbd>.
					</li>
					<li>
						Set paper size to <em>Letter</em>.
					</li>
					<li>
						Set margins to <em>None</em>.
					</li>
					<li>
						Enable <em>Background graphics</em> option.
					</li>
					<li>
						Click the <em>Save</em> button.
					</li>
				</ol>
			</div>
		</div>
	);
};

export default PrintInfo;
