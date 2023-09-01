import React, { useState } from "react";
import {
  Container,
  TextField,
  Typography,
  Grid,
  Avatar,
  Card,
  CardContent,
  Button,
} from "@mui/material";

const CareProviders = ({ providers, onSelectProvider }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProviders = providers.filter((provider) =>
    provider.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Typography variant="h4">Care Providers</Typography>
      <TextField
        label="Search Providers"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ marginY: 2 }}
      />
      <Grid container spacing={2}>
        {filteredProviders.map((provider, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card elevation={3}>
              <CardContent>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item>
                    <Avatar
                      src={provider.avatar}
                      sx={{ width: 64, height: 64 }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">{provider.name}</Typography>
                    <Typography color="textSecondary">
                      {provider.specialty}
                    </Typography>
                    {/* Additional provider details can be added here */}
                  </Grid>
                </Grid>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => onSelectProvider(provider)}
                  sx={{ marginTop: 2 }}
                >
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CareProviders;
