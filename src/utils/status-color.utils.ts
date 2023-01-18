const statusColor = (code: string) => {
    let color = '';
    if (code.startsWith('1')) color = 'yellow';
    else if (code.startsWith('2')) color = 'green';
    else if (code.startsWith('3')) color = 'orange';
    else if (code.startsWith('4')) color = 'red';
    else if (code.startsWith('5')) color = 'red';

    return color;
  }
  
  export default statusColor;