import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
	models: {
		transaction: Model,
	},

	seeds(server) {
		server.db.loadData({
			transactions: [
				{
					id: 1,
					title: "Freelancer de WebSite",
					type: "deposit",
					amount: 2000,
					category: "Development",
					createdAt: new Date("2020-01-01 12:11:27"),
				},
				{
					id: 2,
					title: "Aluguel de apartamento",
					type: "withdraw",
					amount: 1000,
					category: "Housing",
					createdAt: new Date("2020-03-01 15:01:37"),
				},
			],
		});
	},

	routes() {
		this.namespace = "api";

		this.get("/transactions", () => {
			return this.schema.all("transaction");
		});

		this.post("/transactions", (schema, request) => {
			const data = JSON.parse(request.requestBody);
			return schema.create("transaction", data);
		});
	},
});

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
