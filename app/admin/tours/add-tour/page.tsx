"use client";

import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";
import AdminSidebar from "@/components/AdminSidebar";
import CustomUploadButton from "@/components/UploadButton";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AddTourPage() {
  const router = useRouter();
  const createTour = useMutation(api.tours.create);
  const destinations = useQuery(api.destinations.list);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    destinationId: "",
    galleryImages: [] as string[],
    status: "draft",
    regularPrice: 0,
    salePrice: 0,
    childrenPrice: 0,
    babyPrice: 0,
    durationDays: 0,
    amountOfInsurance: 0,
    enableDeposit: "No",
    fullPayment: "No",
    depositType: "Percentage of price",
    depositAmount: 0,
    maximumTourAtATime: 0,
    stockQuantityByGuests: false,
    maximumTotalNumberOfGuest: 0,
    maximumAdults: 0,
    minimumAdults: 0,
    maximumChildren: 0,
    maximumBabies: 0,
    minimumBabies: 0,
    embedVideoLink: "",
    disableWeekDay: 0,
    xDaysPreparationTime: 0,
    featuredImage: "",
  });

  const [durationToggle, setDurationToggle] = useState(false);
  const [fixedTimes, setFixedTimes] = useState<Array<{ checkIn: string; checkOut: string }>>([]);
  const [features, setFeatures] = useState<Array<{ iconClass: string; label: string; description: string }>>([]);
  const [globalDiscounts, setGlobalDiscounts] = useState<Array<{ adultPrice: number; childrenPrice: number; babyPrice: number; minMaxNumber: number }>>([]);
  const [specialTimes, setSpecialTimes] = useState<Array<{ adultPrice: number; childrenPrice: number; babyPrice: number; startDate: string; endDate: string; discountInSpecialTime: number }>>([]);
  const [resources, setResources] = useState<Array<{ uniqueId: string; name: string; adultPrice: number; childrenPrice: number; babyPrice: number; type: string }>>([]);
  const [services, setServices] = useState<Array<{ label: string; required: string; options: Array<{ uniqueId: string; name: string; adultPrice: number; childrenPrice: number; babyPrice: number; type: string }> }>>([]);
  const [unavailableTimes, setUnavailableTimes] = useState<Array<{ startDate: string; endDate: string }>>([]);
  const [dayDescriptions, setDayDescriptions] = useState<string[]>([]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await createTour({
        name: formData.name,
        description: formData.description,
        price: formData.regularPrice, // Using regularPrice as the main price for now
        duration: formData.durationDays.toString(), // Using durationDays as duration for now
        destinationId: formData.destinationId as Id<"destinations">,
        imageUrl: formData.galleryImages[0] || "", // Pass the first image from galleryImages, or an empty string if no images
        status: formData.status,
        // The new fields (e.g., durationToggle, fixedTimes, etc.) are not yet
        // supported by the Convex schema and mutation. They need to be added
        // to convex/schema.ts and convex/tours.ts for full functionality.
      });
      router.push("/admin/tours");
    } catch (error) {
      console.error("Error creating tour:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageUpload = (url: string) => {
    setFormData(prev => ({ ...prev, galleryImages: [...prev.galleryImages, url] }));
  };

  const handleFeaturedImageUpload = (url: string | string[]) => {
    if (Array.isArray(url)) {
      setFormData(prev => ({ ...prev, featuredImage: url[0] || "" }));
    } else {
      setFormData(prev => ({ ...prev, featuredImage: url }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1 p-8">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Add New Tour</h1>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Section 0: Title & Images */}
              <div className="bg-white rounded-lg shadow p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Trip Title & Images</h2>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tour Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Featured Image</label>
                  <CustomUploadButton
                    onUploadComplete={handleFeaturedImageUpload}
                    onUploadError={error => console.error("Upload error:", error)}
                  />
                  {formData.featuredImage && (
                    <div className="mt-2">
                      <img
                        src={formData.featuredImage}
                        alt="Featured Preview"
                        className="w-48 h-48 object-cover rounded"
                      />
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tour Gallery Images</label>
                  <CustomUploadButton
                    onUploadComplete={urls => {
                      if (Array.isArray(urls)) {
                        setFormData(prev => ({ ...prev, galleryImages: [...prev.galleryImages, ...urls] }));
                      } else if (urls) {
                        setFormData(prev => ({ ...prev, galleryImages: [...prev.galleryImages, urls] }));
                      }
                    }}
                    onUploadError={error => console.error("Upload error:", error)}
                  />
                  {formData.galleryImages.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {formData.galleryImages.map((url, index) => (
                        <div key={index} className="relative">
                          <img
                            src={url}
                            alt={`Gallery image ${index + 1}`}
                            className="w-32 h-32 object-cover rounded"
                          />
                          <button
                            type="button"
                            onClick={() => setFormData(prev => ({
                              ...prev,
                              galleryImages: prev.galleryImages.filter((_, i) => i !== index)
                            }))}
                            className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                          >
                            X
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Section 1: Pricing and Duration */}
              <div className="bg-white rounded-lg shadow p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Pricing & Duration</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Regular price ($)</label>
                    <input
                      type="number"
                      value={formData.regularPrice}
                      onChange={e => setFormData(prev => ({ ...prev, regularPrice: Number(e.target.value) }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Sale price ($)</label>
                    <input
                      type="number"
                      value={formData.salePrice}
                      onChange={e => setFormData(prev => ({ ...prev, salePrice: Number(e.target.value) }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Children price ($)</label>
                    <input
                      type="number"
                      value={formData.childrenPrice}
                      onChange={e => setFormData(prev => ({ ...prev, childrenPrice: Number(e.target.value) }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Baby price ($)</label>
                    <input
                      type="number"
                      value={formData.babyPrice}
                      onChange={e => setFormData(prev => ({ ...prev, babyPrice: Number(e.target.value) }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="mb-4 flex items-center space-x-2">
                  <label className="block text-sm font-medium text-gray-700">Duration</label>
                  <input
                    type="checkbox"
                    checked={durationToggle}
                    onChange={e => {
                      setDurationToggle(e.target.checked);
                      if (!e.target.checked) {
                        setFormData(prev => ({ ...prev, durationDays: 0 }));
                        setDayDescriptions([]);
                      }
                    }}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  {durationToggle && (
                    <input
                      type="number"
                      min={1}
                      value={formData.durationDays}
                      onChange={e => {
                        const days = Number(e.target.value);
                        setFormData(prev => ({ ...prev, durationDays: days }));
                        setDayDescriptions(prev => {
                          if (days > prev.length) {
                            return [...prev, ...Array(days - prev.length).fill("")];
                          } else {
                            return prev.slice(0, days);
                          }
                        });
                      }}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-24"
                      placeholder="Days"
                    />
                  )}
                </div>
                {durationToggle && formData.durationDays > 0 && (
                  <div className="mb-4 space-y-4">
                    {Array.from({ length: formData.durationDays }).map((_, idx) => (
                      <div key={idx} className="flex flex-col">
                        <label className="font-semibold text-gray-700 mb-1">Day {idx + 1}</label>
                        <textarea
                          value={dayDescriptions[idx] || ""}
                          onChange={e => {
                            const newDescs = [...dayDescriptions];
                            newDescs[idx] = e.target.value;
                            setDayDescriptions(newDescs);
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder={`Description for Day ${idx + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Payment</label>
                    <select
                      value={formData.fullPayment}
                      onChange={e => setFormData(prev => ({ ...prev, fullPayment: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="No">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Deposit type</label>
                    <select
                      value={formData.depositType}
                      onChange={e => setFormData(prev => ({ ...prev, depositType: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Percentage of price">Percentage of price</option>
                      <option value="Fixed amount">Fixed amount</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Deposit amount (%)</label>
                    <input
                      type="number"
                      value={formData.depositAmount}
                      onChange={e => setFormData(prev => ({ ...prev, depositAmount: Number(e.target.value) }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Guest */}
              <div className="bg-white rounded-lg shadow p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Guest</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Maximum total number of guest</label>
                    <input
                      type="number"
                      value={formData.maximumTotalNumberOfGuest}
                      onChange={e => setFormData(prev => ({ ...prev, maximumTotalNumberOfGuest: Number(e.target.value) }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Maximum Adults</label>
                    <input
                      type="number"
                      value={formData.maximumAdults}
                      onChange={e => setFormData(prev => ({ ...prev, maximumAdults: Number(e.target.value) }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Adults</label>
                    <input
                      type="number"
                      value={formData.minimumAdults}
                      onChange={e => setFormData(prev => ({ ...prev, minimumAdults: Number(e.target.value) }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Maximum Children</label>
                    <input
                      type="number"
                      value={formData.maximumChildren}
                      onChange={e => setFormData(prev => ({ ...prev, maximumChildren: Number(e.target.value) }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Maximum Babies</label>
                    <input
                      type="number"
                      value={formData.maximumBabies}
                      onChange={e => setFormData(prev => ({ ...prev, maximumBabies: Number(e.target.value) }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Babies</label>
                    <input
                      type="number"
                      value={formData.minimumBabies}
                      onChange={e => setFormData(prev => ({ ...prev, minimumBabies: Number(e.target.value) }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                  <select
                    value={formData.destinationId}
                    onChange={e => setFormData(prev => ({ ...prev, destinationId: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select a destination</option>
                    {destinations?.map(dest => (
                      <option key={dest._id} value={dest._id}>
                        {dest.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Fixed Time */}
                <div className="mb-4 p-3 border rounded-md bg-gray-50">
                  <h3 className="text-md font-semibold text-gray-800 mb-2">Fixed Time</h3>
                  {fixedTimes.map((time, index) => (
                    <div key={index} className="flex items-center space-x-2 mb-2">
                      <input
                        type="date"
                        value={time.checkIn}
                        onChange={e => {
                          const newTimes = [...fixedTimes];
                          newTimes[index].checkIn = e.target.value;
                          setFixedTimes(newTimes);
                        }}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
                        placeholder="Check in *"
                      />
                      <input
                        type="date"
                        value={time.checkOut}
                        onChange={e => {
                          const newTimes = [...fixedTimes];
                          newTimes[index].checkOut = e.target.value;
                          setFixedTimes(newTimes);
                        }}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
                        placeholder="Check out *"
                      />
                      <button
                        type="button"
                        onClick={() => setFixedTimes(fixedTimes.filter((_, i) => i !== index))}
                        className="text-red-500 hover:text-red-700"
                      >
                        X
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => setFixedTimes([...fixedTimes, { checkIn: "", checkOut: "" }])}
                    className="px-3 py-1 text-sm text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50"
                  >
                    Add Time
                  </button>
                </div>

                {/* Features */}
                <div className="mb-4 p-3 border rounded-md bg-gray-50">
                  <h3 className="text-md font-semibold text-gray-800 mb-2">Features</h3>
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 mb-2">
                      <input
                        type="text"
                        value={feature.iconClass}
                        onChange={e => {
                          const newFeatures = [...features];
                          newFeatures[index].iconClass = e.target.value;
                          setFeatures(newFeatures);
                        }}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
                        placeholder="Icon Class *"
                      />
                      <input
                        type="text"
                        value={feature.label}
                        onChange={e => {
                          const newFeatures = [...features];
                          newFeatures[index].label = e.target.value;
                          setFeatures(newFeatures);
                        }}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
                        placeholder="Label *"
                      />
                      <input
                        type="text"
                        value={feature.description}
                        onChange={e => {
                          const newFeatures = [...features];
                          newFeatures[index].description = e.target.value;
                          setFeatures(newFeatures);
                        }}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
                        placeholder="Description *"
                      />
                      <button
                        type="button"
                        onClick={() => setFeatures(features.filter((_, i) => i !== index))}
                        className="text-red-500 hover:text-red-700"
                      >
                        X
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => setFeatures([...features, { iconClass: "", label: "", description: "" }])}
                    className="px-3 py-1 text-sm text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50"
                  >
                    Add Feature
                  </button>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50"
                >
                  {isSubmitting ? "Creating..." : "Create Tour"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
