import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, Paper, Typography } from "@mui/material";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "admin123") {
            localStorage.setItem("isAuth", "true");
            navigate("/");
        } else {
            alert("Invalid credentials. Try admin/admin123");
        }
    };

    const handleAutoFill = () => {
        setUsername("admin");
        setPassword("admin123");
    };

    return (
        <Container
            maxWidth={false}
            sx={{
                minHeight: "100vh",
                backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Paper elevation={6}
                sx={{
                    p: 4,
                    width: 350,
                    backdropFilter: "blur(6px)",
                    backgroundColor: "rgba(255, 255, 255, 0.85)",
                    borderRadius: 2
                }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={handleLogin}>
                    <TextField
                        label="Username"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2 }}
                        onClick={handleAutoFill}
                    >
                        Auto Fill
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        Login
                    </Button>
                </form>
            </Paper>
        </Container>
    );
}
