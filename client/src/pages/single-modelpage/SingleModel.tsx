import { fetchDataProps, singleDataProps } from '../../types/queryProps'

type SingleModelProps = {
  data: any
}

// typecast single object?

export const SingleModel = ({ data }: SingleModelProps) => {
  if (data) {
    console.log(data.people[0]._id)
  }

  return (
    <div className="single-model flex flex-col items-center p-10 font-mono">
      <p>
        {data.people[0].firstname} {data.people[0].lastname}
      </p>
      <p>
        <b>address:</b> {data.people[0].address}
      </p>
      <p>
        <b>age:</b> {data.people[0].age}
      </p>
      <p>
        <b>city:</b> {data.people[0].city}
      </p>
      <p>
        <b>email:</b> {data.people[0].email}
      </p>
      <p>
        <b>ethnicity:</b> {data.people[0].ethnicity}
      </p>
      <p>
        <b>haircolor:</b> {data.people[0].haircolor}
      </p>
      <p>
        <b>height:</b> {data.people[0].height}
      </p>
      <p>
        <b>phoneNumber:</b> {data.people[0].phoneNumber}
      </p>
      <p>
        <b>shoeSize:</b> {data.people[0].shoeSize}
      </p>
      <p>
        <b>skincolor:</b> {data.people[0].skincolor}
      </p>
      <p>
        <b>waistSize:</b> {data.people[0].waistSize}
      </p>
      <p>
        <b>weight:</b> {data.people[0].weight}
      </p>

      <img src={data.people[0].pictures}></img>
    </div>
  )
}
