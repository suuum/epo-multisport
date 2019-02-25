import React, { Component } from "react";
import { Link } from "react-router-dom";

export class HealthCoaching extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h2>Opieka trenerska</h2>
                <p>
                Oferujemy opiekę trenerską na zaawansowanej platformie treningowej - TrainingPeaks
                Prowadzimy biegaczy, kolarzy oraz triathlonistów! 
                </p>
                <p><b>Trener - Daniel Jakimiuk</b>, triathlonista kategorii wiekowych, medalista mistrzostw Polski w duathlonie, oraz na dystansie ½ IM w Age Group, więcej można się dowiedzieć na moim fanpagu <Link to="https://www.facebook.com/zBogiemprzeztriathlon/">Z bogiem przez triatlon</Link></p>
            </div>
        );
    }
}
