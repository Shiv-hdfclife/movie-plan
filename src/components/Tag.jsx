export default function Tag({ rate }) {
    function check(rate) {
        return rate >= 8 ? "#00FF00" : "#FF0000"; // return is required
    }

    return (
        <div
            className="tag"
            style={{
                backgroundColor: check(rate),
                border: "1px solid #000",
                padding: "6px 12px",
                borderRadius: "12px",
                color: "#000", // you can change this based on background
                fontWeight: "bold",
                display: "inline-block",
                marginTop: "8px"
            }}
        >
            {rate >= 8 ? "Recommended" : "Not Recommended"}
        </div>
    );
}
