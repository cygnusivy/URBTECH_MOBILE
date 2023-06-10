import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#F3FCE7",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 1,

    backgroundColor: "#F3FCE7",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    backgroundColor: "#161B31",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 10,
  },
  leftContainer: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
  },
  rightContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  arrowContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  arrow: {
    width: 10,
    height: 10,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    transform: [{ rotate: "45deg" }],
    borderColor: "#98C065",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#98C065",
  },
  circle: {
    width: 46,
    height: 46,
    borderRadius: 24,
    backgroundColor: "#98C065",
    justifyContent: "center",
    alignItems: "center",
  },

  boxContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 10,
  },
  box: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowColor: "#000000",
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
    flexDirection: "row",
    marginRight: 10,
    marginLeft: 15,
    marginTop: 10,
  },
  text: {
    color: "#000000",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 17,
  },

  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#161B31",
    borderRadius: 50,
    marginBottom: 60,
  },
  imageContainer: {
    marginTop: 32,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 360,
    height: 290,
    margin: 8,
    borderRadius: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  modalImage: {
    width: 300,
    height: 300,
    marginBottom: 16,
    borderRadius: 8,
  },
  closeButton: {
    backgroundColor: "#EAEAEA",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
});

export default styles;
