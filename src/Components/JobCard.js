import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../App.css';


export default function JobCard({name}) {

  return (
    <Card className="job-card">
      <CardContent>
        <Typography className="job-card-title" color="textSecondary" gutterBottom>
        {`משרה ב- ${name}`}
        </Typography>
        <Typography variant="h5" component="h2">
        כותרת המשרה
        </Typography>
        <Typography className="job-card-pos" color="textSecondary">
          פירט על המשרה
        </Typography>
        <Typography variant="body2" component="p">
        דרישות
          <br />
        
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">עוד</Button>
      </CardActions>
    </Card>
  );
}