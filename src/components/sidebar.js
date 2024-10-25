import React from 'react';

const Sidebar = () => {
  return (
    <div>
      <h2>Findings</h2>
        <ul>
            <li>RBC</li>
            <ol>
                <li>Angled Cells:-</li>
                <ul>
                    <li>count:-222</li>
                    <li>Percentage:-67%</li>
                </ul>
                <li>Borderline Ovalacytes</li>
                <ul>
                    <li>count:-50</li>
                    <li>Percentage:-20%</li>
                </ul>
                <li>Burr Cells</li>
                <ul>
                    <li>Count:-87</li>
                    <li>Percentage:-34%</li>
                </ul>
                <li>Fragmented Cells</li>
                <ul>
                    <li>Count:-2</li>
                    <li>Percentage:-0.12%</li>
                </ul>
                <li>Ovalacytes</li>
                <li>Rounded RBC</li>
                <li>Teardrops</li>
            </ol>
            <li>WBC</li>
            <ol>
                <li>Basophil</li>
                <ul>
                    <li>count:-222</li>
                    <li>Percentage:-67%</li>
                </ul>
                <li>Eosinophil</li>
                <ul>
                    <li>Count:-50</li>
                    <li>Percentage:-20%</li>
                </ul>
                <li>Lymphocyte</li>
                <ul>
                    <li>Count:-67</li>
                    <li>Percentage:-34%</li>
                </ul>
                <li>Monocyte</li>
                <ul>
                    <li>count:-2</li>
                    <li>Percentage:-0.12%</li>
                </ul>
                
            </ol><li>Platelets</li>
                <ul>
                    <li>Count:-222</li>
                    <li>Percentage:-22%</li>
                </ul>
        </ul>
    </div>
  );
};

export default Sidebar;