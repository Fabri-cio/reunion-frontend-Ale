import { useNavigate } from "react-router-dom";
import Table from "./Table";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import Pagination from "./Pagination";
import usePagination from "../../hooks/usePagination";
import { Navigation } from "./Navigation";

function EntityList({ entityData }) {
  const {
    title,
    fetchDataHook,
    entityFields,
    editPath,
    loadingMessage,
    errorMessage,
    listPath,
    subTitle,
    all_data,
    actions = [],
    icon
  } = entityData; // Desestructuramos entityConfig

  const navigate = useNavigate();
  const { currentPage, handlePageChange } = usePagination();
  const {
    data: response = {},
    isLoading,
    isError,
  } = fetchDataHook(all_data, currentPage);

  const {
    count = 0,
    next = null,
    previous = null,
    results = [],
  } = response.data || {};

  const items = response.data?.data || results || [];
  const totalItems = count;

  const hasPagination = next || previous;

  const handleDetallesClick = (id) => {
    navigate(`${editPath}/${id}`);
  };

  if (isLoading) return <Loading message={loadingMessage} />;
  if (isError) return <ErrorMessage message={errorMessage} />;

  return (
    <div className="space-y-1 m-2 ml-3 px-2 py-1 border-2 border-gray-400 rounded-lg">
      <Navigation
        title={title}
        listPath={`${listPath}`}
        subTitle={`${subTitle}`}
        actions={actions}
        icon={icon}
      />

      <Table
        items={items}
        fields={entityFields(handleDetallesClick)}
        currentPage={currentPage}
        itemsPerPage={10}
      />

      {hasPagination && (
        <Pagination
          currentPage={currentPage}
          nextPage={next}
          prevPage={previous}
          onPageChange={handlePageChange}
          count={totalItems}
        />
      )}
    </div>
  );
}

export default EntityList;
