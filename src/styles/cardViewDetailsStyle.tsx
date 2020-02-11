import { makeStyles } from "@material-ui/styles";

export const cardViewDetailsStyle = makeStyles({
  card: {
    minHeight: 400,
    minWeight: 20,
    marginRight: 300,
    marginLeft: 300,
    marginBottom: 50,
    backgroundColor: "rgb(145, 144, 144)"
  },
  title: {
    fontSize: 34,
    color :  "#3f51b5",
    textAlign : "center",
    fontWeight : "bold",
  },
  text : {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color :  "#3f51b5",
    },
  pos: {
    marginBottom: 12
  },
  
});
