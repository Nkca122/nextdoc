import { Box, Button, ButtonGroup, Typography } from "@mui/material";
export default function Home() {
  return (
    <>
      <Box
        sx={{
          display: "inline-block",
          width: "100%",
          mt: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
            bgcolor: "#EBEBEB",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            overflow: "hidden",
            p: 2,
          }}
        >
          <Box>Logo</Box>
          <Box>
            <ButtonGroup variant="text" size="small">
              <Button
                sx={{
                  width: "44px",
                  height: "44px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="/share.png"
                  alt="Share"
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              </Button>
              <Button
                sx={{
                  width: "44px",
                  height: "44px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="/question-mark-circle.png"
                  alt="Share"
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              </Button>
              <button
                style={{
                  backgroundColor: "#2063ff",
                  borderRadius: "16px",
                  margin: "2px",
                  border: "none",
                  boxShadow: "none",
                  color: "#EBEBEB",
                  padding: "8px 16px"
                }}
              >
                New Chat
              </button>
            </ButtonGroup>
          </Box>
        </Box>
      </Box>
    </>
  );
}
