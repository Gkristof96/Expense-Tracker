import GoogleIcon from "@mui/icons-material/Google";
// material
import { Stack, Button, Divider, Typography } from "@mui/material";

// ----------------------------------------------------------------------

export default function AuthSocial() {
  return (
    <>
      <Stack direction='row' spacing={2}>
        <Button
          startIcon={<GoogleIcon sx={{ color: "#ea4335" }} />}
          fullWidth
          size='large'
          variant='outlined'
          color='inherit'
          sx={{ m: "25px 0" }}
        >
          Authenticate with Google
        </Button>
      </Stack>

      <Divider sx={{ my: 3 }}>
        <Typography variant='body2' sx={{ color: "text.secondary" }}>
          OR
        </Typography>
      </Divider>
    </>
  );
}
