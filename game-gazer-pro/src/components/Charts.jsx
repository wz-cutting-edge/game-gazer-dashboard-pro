import {BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell} from 'recharts'
const Charts = ({games}) =>{
    const genreCounts={};
    games.forEach(game =>{
        game.genres.forEach(genres =>{
            genreCounts[genre.name] = (genreCounts[genre.name] || 0)+1;
        });
    });
    const genreData = Object.entries(genreCounts).map(([genre, count]) => ({genre, count}));
    const ratingBuckets=[0,1,2,3,4,5].map(lower =>{
        const upper = lower + 1;
        const label = `${lower}-${upper}`;
        const count = games.filter(g => g.rating >=lower && g.rating < upper).length;
        return {label, count};
    });

    return(
        <div className="Charts">
            <h4>Games by Genre</h4>
            <BarChart width={400} height={250} data={genreData}>
                <XAxis dataKey="genre"/>
                <YAxis />
                <Tooltip/>
                <Bar dataKey="count" fill="#60a5fa"/>
            </BarChart>
            <h4>Rating Distribution</h4>
            <BarChart width={400} height={250} data={ratingBuckets}>
                <XAxis dataKey="label"/>
                <YAxis />
                <Tooltip/>
                <Bar dataKey="count" fill="#10b981"/>
            </BarChart>
        </div>
    )
}
export default Charts