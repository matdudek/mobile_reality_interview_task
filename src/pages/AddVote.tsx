import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom'
import * as Yup from "yup"
import { useAddVote } from '../api'
import { addVote } from '../store/votesSlice'

export function AddVote () {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            sub_id: "",
            value: 0,
            image_id: "",
        },
        validationSchema: Yup.object({
            sub_id: Yup.string().min(5, "Sub ID is to short").required("Sub ID not given"),
            value: Yup.number().min(1, "Value must be positive").required("Value id not given"),
            image_id: Yup.string().min(3, "Image ID is to short").required("Image ID not given")
        }),

        onSubmit: async (values) => {
            const { data } = await useAddVote(values)
            dispatch(addVote({...values, id: data.id}))
            navigate("/votes")
        }
    })

    return (
        <>
        <Link to="/votes"><button className="text-4xl mt-4 absolute left-4 p-4">Back</button></Link>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label className='text-xl' htmlFor="sub_id">Sub Id</label>
                <input 
                    className='border mx-2 my-4 text-xl'
                    type="text"
                    name="sub_id"
                    value={formik.values.sub_id}
                    onChange={formik.handleChange}
                />
                {formik.errors.sub_id ? <p className='text-red-900'>{formik.errors.sub_id}</p> : undefined}
            </div>

            <div>
                <label className='text-xl' htmlFor="value">Value</label>
                <input 
                    className='border mx-2 my-4 text-xl'
                    type="number"
                    name="value"
                    value={formik.values.value}
                    onChange={formik.handleChange}
                />
                 {formik.errors.value ? <p className='text-red-900'>{formik.errors.value}</p> : undefined}
            </div>

            <div>
                <label className='text-xl' htmlFor="value">image_id</label>
                <input 
                    className='border mx-2 my-4 text-xl'
                    type="text"
                    name="image_id"
                    value={formik.values.image_id}
                    onChange={formik.handleChange}
                />
                {formik.errors.image_id ? <p className='text-red-900'>{formik.errors.image_id}</p> : undefined}
            </div>

            <button className='text-2xl border p-4' type="submit">Submit</button>
        </form>
        </>
    )
}