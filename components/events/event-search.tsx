import Button from '@/components/ui/button';
import classes from './event-search.module.css';
import { useRef } from 'react';

function EventSearch( props: any ) {
    const year: any = useRef();
    const month: any = useRef();

    const submitHandler = ( event: any ) => {

        event.preventDefault();
        const selectedYear = year.current?.value;
        const selectedMonth = month.current?.value;
        props.onSearch(selectedYear, selectedMonth);

    }
    return (
        <form className={ classes.form }>
            <div className={ classes.controls }>
                <div className={ classes.control }>
                    <label htmlFor='year'>Year</label>
                    <select id='year' ref={ year as any }>
                        <option value='2021'>
                            2021
                        </option>
                        <option value='2022'>
                            2022
                        </option>
                    </select>
                </div>
                <div className={ classes.control }>
                    <label htmlFor='month'> Month </label>
                    <select id='month' ref={ month as any }>
                        <option value='1'>Jan</option>
                        <option value='2'>Feb</option>
                        <option value='3'>Mar</option>
                        <option value='4'>Apr</option>
                        <option value='5'>May</option>
                        <option value='6'>Jun</option>
                        <option value='7'>July</option>
                        <option value='8'>Aug</option>
                        <option value='9'>Sept</option>
                        <option value='10'>Oct</option>
                        <option value='11'>Nov</option>
                        <option value='12'>Dec</option>
                    </select>
                </div>
            </div>
            <Button onCLick={ submitHandler }>
                Find Events
            </Button>
        </form>
    )
}

export default EventSearch;