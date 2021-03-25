const Page = ({headline, subhead, cta}) => {
    return (
        <div className='Page'>
            <div className='Page-header'>
                <p className="Page-headline">
                {headline}
                </p>
                <p className="Page-subhead">
                {subhead}
                </p>
            </div>
            <div className="Page-cta">
                <p>
                {cta}
                </p>
                <div className='LETS-TALK'>Let's Talk!</div>
            </div>
        </div>
    )
}

export default Page;